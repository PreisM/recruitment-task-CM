<template>
  <div class="pb-4">
    <div ref="scrollComponent">
      <section-header :text="$t('posts.title')" />
      <list
        :posts="posts"
        :is-loading="isLoading"
        @search="search"
        @delete="deletePost"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, onUnmounted } from 'vue'
import apiPosts from '@api/posts'
import SectionHeader from '@atoms/SectionHeader'
import List from '@organisms/List'
import { Post } from '@/interfaces'

export default defineComponent({
  name: 'ListView',
  components: {
    SectionHeader,
    List
  },
  setup () {
    const posts = ref([] as Post[])
    const scrollComponent = ref()
    const skip = ref(20)
    const isLoading = ref(true)
    const isDownloading = ref(false)
    const isSearching = ref(false)

    const handleScroll = async () => {
      const bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight
      if (bottomOfWindow) {
        const element = scrollComponent.value
        if (element.getBoundingClientRect().bottom < window.innerHeight && !isDownloading.value && !isSearching.value) {
          isDownloading.value = true
          await apiPosts.getPosts(10, skip.value).then(({ data }) => {
            posts.value.push(...data.posts)
            isDownloading.value = false
          })
          skip.value += 10
        }
      }
    }

    const getInitData = async () => {
      await apiPosts.getPosts(20, 0).then(({ data }) => {
        posts.value = data.posts
        skip.value = 20
      })
    }

    const search = async (phrase: string) => {
      if (phrase) {
        isSearching.value = true
        await apiPosts.getPostsByPhrase(phrase).then(({ data }) => {
          posts.value = data.posts
        })
      } else {
        isSearching.value = false
        await getInitData()
      }
    }

    const deletePost = async (postId: number) => {
      await apiPosts.deletePost(postId).then(() => {
        const index = posts.value.findIndex(el => el.id === postId)
        posts.value.splice(index, 1)
        //todo show notify
      })
    }
  
    onMounted(async () => {
      await getInitData()
      window.addEventListener('scroll', handleScroll)
      isLoading.value = false
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })
    return {
      posts,
      scrollComponent,
      skip,
      isLoading,
      search,
      deletePost
    }
  }
})
</script>

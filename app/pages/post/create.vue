<template>
    <form class="flex flex-col gap-4 mt-4 ml-5" @submit.prevent="addPost">
        <div class="flex items-center gap-1">
            <UInput ref="new-todo" v-model="postTitle" name="todo" class="flex-1" placeholder="Post Title" autocomplete="off" autofocus :ui="{ wrapper: 'flex-1' }" />
            <UButton type="submit" icon="i-lucide-plus" :disabled="postTitle.trim().length === 0" />
        </div>
        Post List:
        <ul class="divide-y divide-gray-200 dark:divide-gray-800">
            <li v-for="post of data" :key="post.post_id" class="flex items-center gap-4 py-2">
                <span class="flex-1 font-medium">{{ post.post_id }}</span>
                <span class="flex-1 font-medium">{{ post.post_title }}</span>
                <UButton color="error" variant="soft" size="xs" icon="i-lucide-x" @click="deletePost(post.post_id)" />
            </li>
        </ul>
    </form>
</template>
<script setup lang="ts">
const postTitle = ref("")

async function addPost() {
	const response: any = await $fetch("/api/post/create", {
		method: "POST",
		body: {
			post_title: postTitle.value,
		},
	})
	console.log(response)
	refresh()
}

async function deletePost(postId: any) {
	await $fetch("/api/pages/desktop/developer/menu-setting/delete/" + postId,
		{
			method: "DELETE",
		}
	)
	refresh()
}

const { data, status, refresh }: any = await useLazyFetch("/api/post/list",
	{
		method: "GET",
		watch: false,
		key: "post-list",

	}
)
</script>
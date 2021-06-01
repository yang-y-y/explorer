<template>
    <Table
        :loading="loading"
        :columns="columns"
        :data="datalist"
    />
</template>
<script>
export default {
    props:['datalist','columns','loading']
}
</script>
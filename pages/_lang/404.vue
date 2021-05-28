<template>
  <div class="404">
    <Headmobile />
    <div
      class="container"
      style="text-align: center; padding-top: 100px; min-height: 700px"
    >
      <div class="nomessage">
        <h4>Server error</h4>
        <p>
          An error occurred in the application and your page could not be
          served. 
        </p>
        <p>If you are the applicationowner, check your logs for details.</p>
      </div>
    </div>
  </div>
</template>
<style lang="less">
    .nomessage{
        h4{
            font-size: 30px;
            margin-bottom: 20px;
        }
        p{
            margin-bottom: 10px;
            font-size: 16px;
        }
        padding:0 15px;
    }
</style>
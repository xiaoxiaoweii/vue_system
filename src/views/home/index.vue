<template>
  <div>
    <h2>管理系统内容</h2>
    <el-carousel :interval="6000" type="card" height="480px" >
      <el-carousel-item><img src="../../assets/1.jpg" alt="111"><h2>业绩图</h2> </el-carousel-item>
      <el-carousel-item><img src="../../assets/1.jpg"><h2>业绩图</h2></el-carousel-item>
      <el-carousel-item><img src="../../assets/1.jpg"><h2>业绩图</h2></el-carousel-item>
      <el-carousel-item><img src="../../assets/1.jpg"><h2>业绩图</h2></el-carousel-item>
    </el-carousel>
    </el-carousel>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>内容管理系统</span>
      </div>
      <div class="text item">会员管理</div>
      <div class="text item">供应商管理</div>
      <div class="text item">商品管理</div>
      <div class="text item">员工管理</div>
    </el-card>
  </div>
</template>

<style>
h2 {
  text-align: center;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.box-card {
  margin: 0 auto;
  width: 480px;
}
</style>
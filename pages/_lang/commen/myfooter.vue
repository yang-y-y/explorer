<template>
    <div class="footer">
		<div class="container">
			<Row class="foot" type="flex" justify="space-between" align="middle" >
                <Col  :xs="24" :lg="10" class="leftView">
					<div class="logo"><a href="/"><Logo /></a></div>
					<div class="intro">Blocks.org is a powerful full-node blockchain browser, where you can query information including address, transaction hash and block height</div>
					<div class="copyright">Copyright ©2020 Blocks.org Ltd All Rights Reserved</div>
				</Col>
                <Col  :xs="24" :lg="14" class="rightView">
					<div class="view">
						<h3>More</h3>
						<ul>
							<li><a href="">About Us</a></li>
							<li><a href="">Join us</a></li>
							<li><a href="">Disclaimer</a></li>
							<li><a href="">Visit mobile version</a></li>
						</ul>
					</div>
					<div class="view">
						<h3>Support service</h3>
						<ul>
							<li><a href="">Project submission</a></li>
							<li><a href="">Platform submission</a></li>
							<li><a href="">Quote API documentation</a></li>
						</ul>
					</div>
					<div class="view">
						<h3>Contact us</h3>
						<ul>
							<li><a href="">Official customer service</a></li>
							<li><a href="">Application for inclusion</a></li>
							<li><a href="">Advertising Services</a></li>
						</ul>
					</div>
				</Col>
			</Row>
		</div>
	</div>
</template>
<script>
export default {
  name: "footers",
}
</script>
<style lang="less" scoped>
    
</style>
<template>
	<main class="mt-3">
		<div class="container">
			<h2 class="text-center">제품 수정</h2>
			<div class="mb-3 row">
				<label class="col-md-3 col-form-label">제품명</label>
				<div class="col-md-9">
					<input
						type="text"
						class="form-control"
						v-model="productDetail.product_name"
					/>
				</div>
			</div>
			<div class="mb-3 row">
				<label class="col-md-3 col-form-label">제품가격</label>
				<div class="col-md-9">
					<div class="input-group mb-3">
						<input
							type="number"
							class="form-control"
							v-model="productDetail.product_price"
						/>
						<span class="input-group-text">원</span>
					</div>
				</div>
			</div>
			<div class="mb-3 row">
				<label class="col-md-3 col-form-label">배송비</label>
				<div class="col-md-9">
					<div class="input-group mb-3">
						<input
							type="number"
							class="form-control"
							v-model="productDetail.delivery_price"
						/>
						<span class="input-group-text">원</span>
					</div>
				</div>
			</div>
			<div class="mb-3 row">
				<label class="col-md-3 col-form-label">추가배송비(도서산관)</label>
				<div class="col-md-9">
					<div class="input-group mb-3">
						<input
							type="number"
							class="form-control"
							v-model="productDetail.add_delivery_price"
						/>
						<span class="input-group-text">원</span>
					</div>
				</div>
			</div>
			<div class="mb-3 row">
				<label class="col-md-3 col-form-label">제품카테고리</label>
				<div class="col-md-9">
					<div class="row">
						<div class="col-auto">
							<select class="form-select">
								<option>육류</option>
							</select>
						</div>
						<div class="col-auto">
							<select class="form-select">
								<option>소스</option>
							</select>
						</div>
						<div class="col-auto">
							<select class="form-select">
								<option>조리법</option>
							</select>
						</div>
					</div>
				</div>
			</div>
			<div class="mb-3 row">
				<label class="col-md-3 col-form-label">태그</label>
				<div class="col-md-9">
					<input
						type="text"
						class="form-control"
						v-model="productDetail.tags"
					/>
				</div>
			</div>

			<div class="mb-3 row">
				<label class="col-md-3 col-form-label">출고일</label>
				<div class="col-md-9">
					<div class="input-group mb-3">
						<input
							type="number"
							class="form-control"
							v-model="productDetail.out_days"
						/>
						<span class="input-group-text">일 이내 출고</span>
					</div>
				</div>
			</div>

			<div class="mb-3 row">
				<div class="d-flex justify-content-between align-items-center">
					<div class="col-6 d-grid p-1">
						<button type="button" class="btn btn-lg btn-dark" @click="goToList">
							취소하기
						</button>
					</div>
					<div class="col-6 d-grid p-1">
						<button type="button" class="btn btn-lg btn-success">
							저장하기
						</button>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
export default {
	data() {
		return {
			productId: 0,
			productDetail: {}
		};
	},
	computed: {
		user() {
			return this.$store.state.user;
		}
	},
	mounted() {
		if (this.user.email == undefined) {
			alert("로그인을 해주세요");
			this.$router.push({path: "/"});
		}
	},
	created() {
		this.productId = this.$route.query.product_id;
		this.getProductDetail();
	},
	methods: {
		goToList() {
			this.$router.push({path: "/sales"});
		},
		async getProductDetail() {
			let productDetail = await this.$api("/api/productDetail", {
				param: [this.productId]
			});
			if (productDetail.length > 0) {
				this.productDetail = productDetail[0];
			}
		}
	}
};
</script>

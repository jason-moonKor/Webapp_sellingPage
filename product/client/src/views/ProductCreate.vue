<template>
	<main class="mt-3">
		<div class="container">
			<h2 class="text-center">제품등록</h2>
			<div class="mb-3 row">
				<label class="col-md-3 col-form-label">제품명</label>
				<div class="col-md-9">
					<input type="text" class="form-control" />
				</div>
			</div>
			<div class="mb-3 row">
				<label class="col-md-3 col-form-label">제품가격</label>
				<div class="col-md-9">
					<div class="input-group mb-3">
						<input type="number" class="form-control" />
						<span class="input-group-text">원</span>
					</div>
				</div>
			</div>
			<div class="mb-3 row">
				<label class="col-md-3 col-form-label">배송비</label>
				<div class="col-md-9">
					<div class="input-group mb-3">
						<input type="number" class="form-control" />
						<span class="input-group-text">원</span>
					</div>
				</div>
			</div>
			<div class="mb-3 row">
				<label class="col-md-3 col-form-label">추가배송비(도서산관)</label>
				<div class="col-md-9">
					<div class="input-group mb-3">
						<input type="number" class="form-control" />
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
					<input type="text" class="form-control" />
				</div>
			</div>

			<div class="mb-3 row">
				<label class="col-md-3 col-form-label">출고일</label>
				<div class="col-md-9">
					<div class="input-group mb-3">
						<input type="number" class="form-control" />
						<span class="input-group-text">일 이내 출고</span>
					</div>
				</div>
			</div>
			<div class="mb-3 row">
				<label class="col-md-3 col-form-label">썸네일 이미지</label>
				<div class="col-md-9">
					<input
						class="form-control"
						type="file"
						accept="image/png, image/jpeg"
					/>
					<div class="alert alert-warning" role="alert">
						<ul>
							<li>이미지 사이즈 : 350*350</li>
							<li>파일 사이즈 : 1MB 이하</li>
							<li>파일 확장자 : png, jpg 만 가능</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="mb-3 row">
				<label class="col-md-3 col-form-label">제품 이미지</label>
				<div class="col-md-9">
					<input
						class="form-control"
						type="file"
						accept="image/png, image/jpeg"
						multiple
					/>
					<div class="alert alert-warning" role="alert">
						<ul>
							<li>최대 5개</li>
							<li>이미지 사이즈 : 700*700</li>
							<li>파일 사이즈 : 1MB 이하</li>
							<li>파일 확장자 : png, jpg 만 가능</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="mb-3 row">
				<label class="col-md-3 col-form-label">제품 설명 이미지</label>
				<div class="col-md-9">
					<input
						class="form-control"
						type="file"
						accept="image/png, image/jpeg"
					/>
					<div class="alert alert-warning" role="alert">
						<ul>
							<li>파일 사이즈 : 5MB 이하</li>
							<li>파일 확장자 : png, jpg 만 가능</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="mb-3 row">
				<div class="d-flex justify-content-between align-items-center">
					<div class="col-6 d-grid p-1">
						<button type="button" class="btn btn-lg btn-dark">취소하기</button>
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
	}
};
</script>

<template>
  <div class="row justify-content-center">
    <div class="col-lg-6 col-md-8">
      <div class="card bg-secondary border border-soft mb-0">
        <div class="card-header bg-transparent pb-5">
          <div class="text-muted text-center mt-2 mb-4"><small>Sign up with</small></div>
          <div class="text-center">
            <a href="#" class="btn btn-neutral btn-icon mr-4">
              <span class="btn-inner--icon"><img :src="require('@/static/img/icons/common/github.svg')" /></span>
              <span class="btn-inner--text">Github</span>
            </a>
            <a href="#" class="btn btn-neutral btn-icon">
              <span class="btn-inner--icon"><img :src="require('@/static/img/icons/common/google.svg')" /></span>
              <span class="btn-inner--text">Google</span>
            </a>
          </div>
        </div>
        <div class="card-body px-lg-5 py-lg-5">
          <div class="text-center text-muted mb-4">
            <small>Or sign up with credentials</small>
          </div>
          <form role="form">
            <div class="form-group">
              <div class="input-group input-group-merge input-group-alternative mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text"><i class="ni ni-hat-3"></i></span>
                </div>
                <input class="form-control" placeholder="Name" type="text">
              </div>
            </div>
            <div class="form-group">
              <div class="input-group input-group-merge input-group-alternative mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text"><i class="ni ni-email-83"></i></span>
                </div>
                <input class="form-control" placeholder="Email" type="email">
              </div>
            </div>
            <div class="form-group">
              <div class="input-group input-group-merge input-group-alternative">
                <div class="input-group-prepend">
                  <span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span>
                </div>
                <input class="form-control" placeholder="Password" type="password">
              </div>
            </div>
            <div class="row my-4">
              <div class="col-12">
                <div class="custom-control custom-control-alternative custom-checkbox">
                  <input class="custom-control-input" id="customCheckRegister" type="checkbox">
                  <label class="custom-control-label" for="customCheckRegister">
                    <span class="text-muted">I agree with the <a href="#!">Privacy Policy</a></span>
                  </label>
                </div>
              </div>
            </div>
            <div class="text-center">
              <button type="button" class="btn btn-block btn-primary mt-4"><i class="fa fa-sign-out-alt"></i> Create account</button>
            </div>
          </form>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-6">
          <a href="#" class="text-gray"><small>Forgot password?</small></a>
        </div>
        <div class="col-6 text-right">
          <router-link
            to="/login"
            class="text-gray"
          >
            <small>Already have account ?</small>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'Auth',
  transition: 'fade',
  mounted() {
    this.init()
  },
  methods: {
    init: function () {

    }
  }
}
</script>

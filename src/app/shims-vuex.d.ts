// vuex.d.ts
import { Store } from 'vuex'

declare module '@vue/runtime-core' {
  // declare own store states
  interface State  {
    createAccountPage: {
      username: string,
      password: string,
      companyName: string,
      companyPassword: string,
    }
  }
  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}

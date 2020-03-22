export default function(ctx) {
  // If the user is authenticated redirect to home page
  const { store, redirect } = ctx
  if (store.state.auth) {
    return redirect('/')
  }
}

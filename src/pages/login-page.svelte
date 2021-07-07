<script lang="ts">
  let formError = false;

  const loginButonHandleSubmit = (e: Event) => {
    e.preventDefault();

    const values = {
      login: e.target[0].value,
      password: e.target[1].value,
    };

    formError = values.login === '' || values.password === '';

    if (!formError) {
      console.log('values :>> ', values);
    }
  };

  const onFormChange = () => {
    formError = false;
  };
</script>

<svelte:head>
  <title>Login Page</title>
</svelte:head>

<div class="flex flex-col items-center justify-center h-full bg-white">
  <form
    on:submit={loginButonHandleSubmit}
    on:input={onFormChange}
    class={`transition-all duration-300 px-2 py-4 flex flex-col justify-center items-center w-2/4 rounded-md bg-gray-50 shadow-xl space-y-2 ${
      formError ? 'ring-2 ring-red-600' : ''
    }`}
  >
    <div class="text-3xl tracking-widest font-bold">Login form</div>

    <input
      placeholder="Login"
      id="login"
      type="text"
      class="text-lg py-1 px-3 w-full rounded-sm border-gray-200 focus:border-0"
    />

    <input
      placeholder="Password"
      id="password"
      type="password"
      class="text-lg py-1 px-3 w-full rounded-sm border-gray-200 focus:border-0"
    />

    <button
      type="submit"
      class="text-lg py-1 px-3 w-full rounded-sm border-gray-200 hover:border-0"
      >Login</button
    >
  </form>
</div>

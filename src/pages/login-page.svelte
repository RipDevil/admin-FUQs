<script lang="ts">
import { loginChanged, loginStarted, passwordChanged } from "../models/login-form";


  const loginButonHandleSubmit = () => {
    loginStarted();
  };

  const onNameChange = (event:Event & { currentTarget: EventTarget & HTMLInputElement; }) => {
    loginChanged(event.currentTarget.value);
  }

  const onPasswordChange = (event:Event & { currentTarget: EventTarget & HTMLInputElement; }) => {
    passwordChanged(event.currentTarget.value);
  }
</script>

<svelte:head>
  <title>Login Page</title>
</svelte:head>

<div class="flex flex-col items-center justify-center h-full bg-white">
  <form
    on:submit|preventDefault={loginButonHandleSubmit}
    class={`transition-all duration-300 px-2 py-4 flex flex-col justify-center items-center w-2/4 rounded-md bg-gray-50 shadow-xl space-y-2`}
  >
    <div class="text-3xl tracking-widest font-bold">Login form</div>

    <input
      on:input={onNameChange}
      placeholder="Name"
      type="text"
      class="text-lg py-1 px-3 w-full rounded-sm border-gray-200 focus:border-0"
    />

    <input
      on:input={onPasswordChange}
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

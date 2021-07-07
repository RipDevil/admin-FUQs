<header
  class="fixed z-50 py-1 px-2 top-0 left-0 w-full bg-red-50 text-red-400 flex flex-row justify-between items-center text-lg"
>
  <div class="space-x-3">
    <a href={'/#/'}>Main</a>
    <a href={'/#/login'}>Login</a>
  </div>
  <div class="space-x-3">
    <a href={'/#/fuqs'}>Fuqs</a>
    <a href={'/#/users'}>Users</a>
  </div>
</header>

<div class="flex-col mt-10 px-2">
  <slot />
</div>

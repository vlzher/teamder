<template>
  <div class="flex items-center md:order-2">
    <button
      type="button"
      class="flex mr-3 text-sm md:mr-0"
      id="user-menu-button"
      aria-expanded="false"
      data-dropdown-toggle="user-dropdown"
      data-dropdown-placement="bottom"
    >
      <span class="sr-only">Open user menu</span>
      <div
        class="w-10 h-10 rounded-full bg-cover bg-[url('../assets/avatar.png')]"
      ></div>
      <div
        class="ml-1 w-4 h-10 bg-center bg-no-repeat bg-[url('../assets/polygon-avatar.png')]"
      ></div>
    </button>
    <div
      class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
      id="user-dropdown"
    >
      <div class="px-4 py-3">
        <span class="block text-sm text-gray-900 dark:text-white">Name</span>
        <span
          class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400"
          >name@gmail.com</span
        >
      </div>
      <ul class="py-2" aria-labelledby="user-menu-button">
        <li>
          <router-link to="/profile">
            <div
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Profile
            </div>
          </router-link>
        </li>
        <li>
          <router-link to="/signout">
            <div
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
            >
              Sign out
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

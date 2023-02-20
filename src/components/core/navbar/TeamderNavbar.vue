<script setup lang="ts">
import { Navbar, NavbarLogo, NavbarCollapse, NavbarLink } from "flowbite-vue";
</script>
<template>
  <Navbar class="justify-start !p-0">
    <template #logo>
      <NavbarLogo link="/" alt="Teamder logo" image-url="logo.png">
        Teamder
      </NavbarLogo>
    </template>
    <template #default>
      <div class="flex justify-between w-10/12 h-full">
        <NavbarCollapse :isShowMenu="true" class="">
          <NavbarLink link="/">Home</NavbarLink>
          <NavbarLink link="/dashboard">Dashboard</NavbarLink>
        </NavbarCollapse>
        <div class="w-full flex justify-end items-center">
          <router-link to="/">
            <div
              class="mr-5 w-5 h-5 bg-no-repeat bg-cover bg-[url('../assets/theme.png')] cursor-pointer"
            ></div>
          </router-link>
          <router-link to="/">
            <div
              class="mr-5 w-5 h-5 bg-no-repeat bg-cover bg-[url('../assets/analitics.png')] cursor-pointer"
            ></div>
          </router-link>
          <router-link to="/">
            <div
              class="mr-5 w-6 h-6 bg-no-repeat bg-cover bg-[url('../assets/avatar.png')] cursor-pointer"
            ></div>
          </router-link>
          <router-link to="/logout">
            <div class="mr-2 w-5 h-5 cursor-pointer text-[#1C64F2]">Logout</div>
          </router-link>
        </div>
      </div>
    </template>
  </Navbar>
</template>

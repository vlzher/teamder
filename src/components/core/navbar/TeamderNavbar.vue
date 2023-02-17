<script setup lang="ts">
import { Navbar, NavbarLogo, NavbarCollapse, NavbarLink } from "flowbite-vue";
</script>
<template>
  <Navbar>
    <template #logo>
      <NavbarLogo link="/" alt="Teamder logo" image-url="https://flowbite.com/docs/images/logo.svg">
        Teamder
      </NavbarLogo>
    </template>
    <NavbarCollapse>
      <NavbarLink link="/">Home</NavbarLink>
      <NavbarLink link="/dashboard">Dashboard</NavbarLink>
    </NavbarCollapse>
  </Navbar>
</template>

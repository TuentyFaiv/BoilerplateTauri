import { goto } from "$app/navigation";
import { writable } from "svelte/store";
import { DEFAULT_AUTH } from "@utils";

import type { Auth } from "@typing/stores";

function createAuth() {
  const storagedToken = localStorage.getItem("token");
  const storagedUser = localStorage.getItem("user");
  const { subscribe, set, update } = writable<Auth>({
    token: storagedToken,
    user: storagedUser ? JSON.parse(storagedUser) : null
  });

  const authenticate = (newAuth: Partial<Auth>) => {
    if (newAuth.token) {
      localStorage.setItem("token", newAuth.token);
    }
    if (newAuth.user) {
      localStorage.setItem("user", JSON.stringify(newAuth.user));
    }
    if (newAuth.user && newAuth.token) {
      goto("/");
    }

    return update((prevAuth) => ({
      ...prevAuth,
      ...newAuth
    }));
  }

  const unauthenticate = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    goto("/auth");

    return set(DEFAULT_AUTH);
  };

  return {
    subscribe,
    authenticate,
    unauthenticate
  }
}

export const auth = createAuth();
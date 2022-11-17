<script lang="ts">
  import { ButtonGradient, Input } from "@components";
  import { i18n } from "@i18n";
  import { auth } from "@stores";

  let form: HTMLFormElement;

  const onSubmit = () => {
    const data = new FormData(form);
    const email = data.get("user")?.toString();
    const password = data.get("password")?.toString();
    if (email && password) {
      auth.authenticate({
        token: "VALID_TOKEN",
        user: {
          email,
        },
      });
    }
    console.log(Object.fromEntries(data.entries()));
  };
</script>

<form on:submit|preventDefault={onSubmit} bind:this={form} class="signin">
  <h2 class="signin__subtitle">{$i18n.t("subtitle-form", { ns: "auth" })}</h2>
  <div class="signin__content">
    <h1 class="signin__title">{$i18n.t("title-form", { ns: "auth" })}</h1>
    <Input name="user" placeholder={$i18n.t("email", { ns: "forms" })} />
    <Input
      name="password"
      type="password"
      placeholder={$i18n.t("password", { ns: "forms" })}
    />
    <div class="signin__actions">
      <Input
        name="remember"
        placeholder={$i18n.t("remember", { ns: "forms" })}
      />
      <a href="/auth/forgot">{$i18n.t("forgot", { ns: "auth" })}</a>
    </div>
    <ButtonGradient text={$i18n.t("join", { ns: "forms" })} type="submit" />
  </div>
</form>

<style src="../styles/containers/SigninForm.scss"></style>

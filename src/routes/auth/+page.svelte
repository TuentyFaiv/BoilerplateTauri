<script lang="ts">
  import { i18n } from "@i18n";

  import { SigninForm } from "@containers";
  import { SEO } from "@components";
</script>

<SEO title={$i18n.t("auth", { ns: "auth" })} />

<SigninForm />

<style src="../styles/pages/Auth.scss"></style>

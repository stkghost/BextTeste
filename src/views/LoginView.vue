<script lang="ts">
import CustomInput from '../components/CustomInput.vue'
import CustomButton from '../components/CustomButton.vue'
import { defineComponent } from 'vue'
import { useUserStore } from '../stores/user'
import { useRouter } from 'vue-router'

export default defineComponent({
  components: {
    CustomInput,
    CustomButton,
  },

  setup() {
    const userStore = useUserStore()
    const router = useRouter()
    const onLogin = async () => {
      await userStore.validateForm()
      if (Object.keys(userStore.errors || {})?.length > 0) {
        alert('Por favor corrija os erros antes de prosseguir.')
      } else {
        alert('Login realizado com sucesso!')
        router.push({ name: 'todoList' })
      }
    }
    return { userStore, onLogin }
  },
})
</script>

<template>
  <main>
    <div class="main-wrapper">
      <h1>Entrar</h1>
      <form class="form" @submit.prevent="onLogin">
        <CustomInput
          type="email"
          label="E-mail"
          placeholder="email@email.com"
          v-model="userStore.email"
        />
        <p v-if="userStore.errors.email" class="error-message">{{ userStore.errors.email }}</p>
        <CustomInput
          type="password"
          name="password"
          label="Senha"
          placeholder="*********"
          v-model="userStore.password"
        />
        <p v-if="userStore.errors.password" class="error-message">
          {{ userStore.errors.password }}
        </p>
        <div v-if="!isLoggedIn">
          <CustomButton title="Entrar" type="submit" />
        </div>
      </form>
    </div>
  </main>
</template>

<style scoped>
.main-wrapper {
  width: 100%;
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
  h1 {
    font-size: 1.5rem;
  }
}

.form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
}

.error-message {
  font-size: 0.85rem;
  color: #ff0000;
  margin-top: 5px;
}
</style>

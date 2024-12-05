import { defineStore } from 'pinia'
import * as yup from 'yup'
interface Error {
  email: string
  password: string
}
interface UserState {
  email: string
  password: string
  errors: Error
}

const validationSchema = yup.object({
  email: yup.string().email('Formato inválido').required('Campo obrigatório'),
  password: yup
    .string()
    .min(6, 'Senha deve conter no mínimo 6 caracteres')
    .required('Campo obrigatório'),
})

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    email: '',
    password: '',
    errors: {
      email: '',
      password: '',
    },
  }),

  actions: {
    async validateForm() {
      const formData = { email: this.email, password: this.password }
      const errors: Error = {} as Error

      try {
        await validationSchema.validate(formData, { abortEarly: false })

        this.errors = {} as Error
      } catch (err) {
        if (err instanceof yup.ValidationError) {
          err.inner.forEach((error) => {
            if (error.path) errors[error.path as keyof Error] = error.message
          })
        }

        this.errors = errors
        return false
      }
    },

    resetForm() {
      this.email = ''
      this.password = ''
      this.errors = {
        email: '',
        password: '',
      }
    },
  },
})

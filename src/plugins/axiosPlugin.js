import axios from '@/http/axios'

export default function({app}, inject) {
  inject('axios', axios)
}

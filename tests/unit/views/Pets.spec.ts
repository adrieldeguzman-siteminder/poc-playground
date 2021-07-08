import VueCompositionAPI, { ref } from '@vue/composition-api'
import { render } from '@testing-library/vue'
import Pets from '@/views/Pets.vue'

const mockUseQuery = jest.fn()
const mockUseResult = jest.fn()
jest.mock('@vue/apollo-composable', () => ({
  useQuery: (...args: unknown[]) => mockUseQuery(args),
  useResult: (...args: unknown[]) => mockUseResult(args)
}))

test('Pets', () => {
  render(Pets, {}, vue => {
    vue.use(VueCompositionAPI)

    mockUseQuery.mockReturnValueOnce({ loading: ref(false) })
    mockUseResult
      .mockReturnValueOnce(ref([{ id: 'C-1', name: 'Biscuit', weight: 10.2 }]))
  })
})

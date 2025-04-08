import antfu from '@antfu/eslint-config'

export default antfu(
  {
    astro: true,
  },
  {
    ignores: ['dist', 'node_modules', '.github', 'types.generated.d.ts', '.astro'],
  },
)

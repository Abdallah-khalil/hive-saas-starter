import nx from '@nx/eslint-plugin';

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: ['**/dist'],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?js$'],
          depConstraints: [
            {
              sourceTag: 'type:feature',
              onlyDependOnLibsWithTags: [
                'type:feature',
                'type:ui',
                'type:util',
                'type:data-access',
              ],
            },
            {
              sourceTag: 'type:ui',
              onlyDependOnLibsWithTags: [
                'type:ui',
                'type:util',
                'type:data-access',
              ],
            },
            {
              sourceTag: 'type:data-access',
              onlyDependOnLibsWithTags: ['type:data-access', 'type:util'],
            },
            {
              sourceTag: 'type:util',
              onlyDependOnLibsWithTags: ['type:util'],
            },
            {
              sourceTag: 'scope:shared',
              onlyDependOnLibsWithTags: ['scope:shared'],
            },
            {
              sourceTag: 'platform:db',
              onlyDependOnLibsWithTags: ['platform:db'],
            },
            {
              sourceTag: 'platform:server',
              onlyDependOnLibsWithTags: ['platform:server', 'platform:db'],
            },
            {
              sourceTag: 'platform:web',
              onlyDependOnLibsWithTags: [
                'platform:cross-platform',
                'platform:web',
              ],
            },
            {
              sourceTag: 'platform:cross-platform',
              onlyDependOnLibsWithTags: ['platform:cross-platform'],
            },
            {
              sourceTag: 'platform:mobile',
              onlyDependOnLibsWithTags: [
                'platform:mobile',
                'platform:cross-platform',
              ],
            },
          ],
        },
      ],
    },
  },
  {
    files: ['*.ts', '*.tsx'],
    extends: ['plugin:@nx/typescript', 'plugin:@typescript-eslint/recommended'],
    rules: {
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      '@typescript-eslint/explicit-member-accessibility': 'error',
      '@typescript-eslint/member-ordering': 'warn',
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: ['classProperty'],
          format: ['strictCamelCase', 'UPPER_CASE', 'snake_case'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'typeParameter',
          format: ['StrictPascalCase'],
          prefix: ['T'],
        },
        {
          selector: ['typeLike'],
          format: ['StrictPascalCase'],
        },
        {
          selector: ['function', 'classMethod'],
          format: ['strictCamelCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: ['parameter'],
          format: ['strictCamelCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: ['variableLike'],
          format: ['strictCamelCase', 'UPPER_CASE', 'snake_case'],
        },
      ],
      '@typescript-eslint/no-duplicate-type-constituents': 'off',
      '@typescript-eslint/no-dynamic-delete': 'error',
      '@typescript-eslint/no-inferrable-types': 'off',
      '@typescript-eslint/no-empty-interface': 'warn',
      '@typescript-eslint/no-floating-promises': 'error',
      'no-magic-numbers': 'off',
      '@typescript-eslint/no-magic-numbers': [
        'warn',
        {
          ignore: [0, 1],
          ignoreArrayIndexes: true,
          ignoreEnums: true,
          ignoreReadonlyClassProperties: true,
        },
      ],
      '@typescript-eslint/no-require-imports': 'error',
      '@typescript-eslint/no-unused-expressions': 'error',
      '@typescript-eslint/no-useless-constructor': 'error',
      '@typescript-eslint/prefer-for-of': 'error',
      '@typescript-eslint/prefer-nullish-coalescing': 'off',
      '@typescript-eslint/prefer-optional-chain': 'off',
      '@typescript-eslint/prefer-readonly': 'warn',
      '@typescript-eslint/promise-function-async': 'error',
      '@typescript-eslint/require-await': 'off',
      '@typescript-eslint/restrict-plus-operands': [
        'error',
        {
          skipCompoundAssignments: false,
        },
      ],
      '@typescript-eslint/typedef': [
        'error',
        {
          arrayDestructuring: true,
          arrowParameter: true,
          memberVariableDeclaration: true,
          objectDestructuring: true,
          parameter: true,
          propertyDeclaration: true,
          variableDeclaration: true,
        },
      ],
      '@typescript-eslint/unified-signatures': 'error',
      'import/default': 'off',
      'import/namespace': 'off',
      'import/newline-after-import': 'error',
      'import/no-named-as-default': 'off',
      'import/no-named-as-default-member': 'off',
      'import/order': [
        'error',
        {
          alphabetize: {
            order: 'asc',
            caseInsensitive: false,
          },
        },
      ],
      '@typescript-eslint/strict-boolean-expressions': 'off',
      '@typescript-eslint/switch-exhaustiveness-check': 'error',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],

      '@typescript-eslint/no-explicit-any': 'error',
    },
  },
  {
    files: ['**/**-web/**/*.ts'],
    extends: ['plugin:@nx/typescript', 'plugin:@typescript-eslint/recommended'],
    rules: {
      '@angular-eslint/no-output-native': 'error',
      '@angular-eslint/no-input-rename': 'error',
      'rxjs/no-unsafe-takeuntil': 'error',
      'rxjs/no-ignored-observable': 'error',
      'rxjs/no-exposed-subjects': 'error',
      'rxjs/no-unsafe-catch': 'error',
      '@angular-eslint/control-flow-syntax': 'error',
      '@angular-eslint/no-host-metadata-property': 'error',
      '@angular-eslint/no-inputs-metadata-property': 'error',
    },
  },
];

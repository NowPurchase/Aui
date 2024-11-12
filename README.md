# AUI Component Library

A modern React component library built with TypeScript, providing customizable UI components for your applications.

## Features

- 🎨 Customizable UI components with SCSS styling
- 📦 Tree-shakeable ESM and CommonJS builds
- 🔧 TypeScript support with full type definitions
- 💪 Built with React 17+ compatibility
- ⚡ Storybook documentation and development environment
- 🎬 Animation support via Framer Motion
- 🎯 Icon support via Remix Icons

## Installation

Using npm:

```bash
npm install aui-component-library
```

## Usage Guide

### Button Component

```tsx
import { Button } from 'aui-component-library';

// Default Button
<Button>Click me</Button>

// Button variants
<Button variant="default">Default Button</Button>
<Button variant="outlined">Outlined Button</Button>
<Button variant="tertiary1">Tertiary 1</Button>
<Button variant="tertiary2">Tertiary 2</Button>

// Disabled state
<Button disabled>Disabled Button</Button>

// Props
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'default' | 'outlined' | 'tertiary1' | 'tertiary2' | 'disabled';
  disabled?: boolean;
  onClick?: () => void;
}
```

### Input Component

```tsx
import { Input } from 'aui-component-library';

// Basic Input
<Input
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>

// Input with validation
<Input
  value={value}
  onChange={handleChange}
  isError={true}
  errorMsg="This field is required"
/>

// Input with prefix/suffix
<Input
  value={value}
  onChange={handleChange}
  prefix={<Icon />}
  suffix={<SearchIcon />}
/>

// Props
interface InputProps {
  value: string | number | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'email' | 'password' | 'number';
  placeholder?: string;
  isError?: boolean;
  errorMsg?: string;
  name?: string;
  required?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  style?: Record<'input' | 'container', Record<string, string>>;
}
```

### SearchBar Component

```tsx
import { SearchBar } from "aui-component-library";

// Basic SearchBar
<SearchBar
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>;

// Props
interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}
```

### Prompt Component (Modal)

```tsx
import { Prompt } from "aui-component-library";

// Basic Modal
<Prompt
  isOpen={isModalOpen}
  title="Confirmation"
  onClose={() => setModalOpen(false)}
  onSuccess={handleSuccess}
>
  <p>Are you sure you want to proceed?</p>
</Prompt>;

// Props
interface PromptProps {
  isOpen: boolean;
  title: string;
  children?: React.ReactNode;
  onClose: () => void;
  onSuccess: () => void | undefined;
  cancellable?: boolean;
}
```

### Accordion Component

```tsx
import { Accordion } from 'aui-component-library';

// Basic Accordion
<Accordion title="Click to expand">
  <p>This is the accordion content</p>
</Accordion>

// Styled Accordion
<Accordion
  title="Custom Styled Accordion"
  styles={{
    header: { backgroundColor: '#f5f5f5' },
    body: { padding: '1rem' },
    container: { border: '1px solid #ddd' }
  }}
>
  <div>Custom styled content</div>
</Accordion>

// Props
interface AccordionProps {
  title: React.ReactNode;
  children: React.ReactNode;
  styles?: {
    header?: Record<string, string>;
    body?: Record<string, string>;
    container?: Record<string, string>;
  };
}
```

## Development

1. Clone the repository:

```bash
git clone https://github.com/NowPurchase/Aui.git
```

2. Install dependencies:

```bash
npm install
```

3. Start development environment:

```bash
npm run dev
```

This will start both the Rollup build process in watch mode and Storybook development server.

### Available Scripts

- `npm run dev` - Start development environment
- `npm run build` - Build the library
- `npm run storybook` - Start Storybook development server
- `npm run build-storybook` - Build Storybook for production
- `npm run build-library` - Build everything (library + Storybook)
- `npm run clean` - Clean build directories

## License

ISC © [Sujan]

## Contributing

Please read our contributing guidelines before submitting pull requests.

## Issues

For bugs and feature requests, please [create an issue](https://github.com/NowPurchase/Aui/issues).

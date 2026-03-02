# Star Button
URL: /docs/buttons/star-button

The StarButton is a visually striking button that features a radial light animation with a starry background.

***

title: Star Button
description: The StarButton is a visually striking button that features a radial light animation with a starry background.
component: true
---------------

<ComponentPreview name="star-button-demo" className="[&_.preview>[data-orientation=vertical]]:sm:max-w-[80%] **:[.preview]:min-h-[400px]" description="The StarButton is a visually striking button that features a radial light animation with a starry background." align="center" />

## Installation

<CodeTabs>
  <TabsList>
    <TabsTrigger value="cli">CLI</TabsTrigger>
    <TabsTrigger value="manual">Manual</TabsTrigger>
  </TabsList>

  <TabsContent value="cli">
    ```bash
    npx shadcn@latest add https://badtz-ui.com/r/star-button.json
    ```
  </TabsContent>

  <TabsContent value="manual">
    <Steps>
      <Step>Install the following dependencies:</Step>

      ```bash
      npm install clsx tailwind-merge
      ```

      <Step>Add the `utils` file to the `@/lib` folder</Step>

      ```tsx showLineNumbers
      import { ClassValue, clsx } from "clsx";
      import { twMerge } from "tailwind-merge";

      export function cn(...inputs: ClassValue[]) {
        return twMerge(clsx(inputs));
      }
      ```

      <Step>Copy and paste the following code into your project.</Step>

      <ComponentSource name="star-button" title="components/ui/star-button.tsx" />

      <Step>Tailwind v4: Update `@/global.css`</Step>

      ```css showLineNumbers
      @theme inline {
        --animate-star-btn: star-btn calc(var(--duration) * 1s) linear infinite;
      }

      @keyframes star-btn {
        0% {
          offset-distance: 0%;
        }
        100% {
          offset-distance: 100%;
        }
      }
      ```

      <Step>Tailwind v3: Update `tailwind.config.js`</Step>

      ```js showLineNumbers
      /** @type {import('tailwindcss').Config} */
      module.exports = {
        theme: {
          extend: {
            keyframes: {
              "star-btn": {
                "0%": { "offset-distance": "0%" },
                "100%": { "offset-distance": "100%" },
              },
            }
            animation: {
              "star-btn": "star-btn calc(var(--duration)*1s) linear infinite",
            },
          },
        },
      }
      ```

      <Step>Update the import paths to match your project setup.</Step>
    </Steps>
  </TabsContent>
</CodeTabs>

## Usage

```tsx showLineNumbers
import { StarButton } from "@/components/ui/star-button";
```

```tsx showLineNumbers
<StarButton className="rounded-3xl">Hover me</StarButton>
```

## Props

`StarButton` props.

<TypeTable
  type={{
  children: {
    type: "ReactNode",
    description: "The content inside the button.",
    required: true
  },
  lightWidth: {
    type: "number",
    description: "Width of the light effect in pixels.",
    default: "110"
  },
  duration: {
    type: "number",
    description: "Duration of the light animation in seconds.",
    default: "3"
  },
  lightColor: {
    type: "string",
    description: "Color of the light effect.",
    default: '"#FAFAFA"'
  },
  backgroundColor: {
    type: "string",
    description: "Background color of the star effect.",
    default: '"currentColor"'
  },
  borderWidth: {
    type: "number",
    description: "Width of the border around the button in pixels.",
    default: "2"
  },
  className: {
    type: "string",
    description: "Additional custom classes for styling."
  }
}}
/>


# Particles
URL: /docs/components/particles

A versatile and performant component for creating engaging, animated content displays with smooth infinite scrolling animations. Perfect for showcasing client logos, testimonials, feature highlights, and promotional content with customizable speed, direction, and responsive design.

***

title: Particles
description: A versatile and performant component for creating engaging, animated content displays with smooth infinite scrolling animations. Perfect for showcasing client logos, testimonials, feature highlights, and promotional content with customizable speed, direction, and responsive design.
component: true
---------------

<ComponentPreview name="particles-demo" className="[&_.preview>[data-orientation=vertical]]:sm:max-w-[80%] **:[.preview]:min-h-[400px]" description="A particles component" align="center" />

## Installation

<CodeTabs>
  <TabsList>
    <TabsTrigger value="cli">CLI</TabsTrigger>
    <TabsTrigger value="manual">Manual</TabsTrigger>
  </TabsList>

  <TabsContent value="cli">
    ```bash
    npx shadcn@latest add https://badtz-ui.com/r/particles.json
    ```
  </TabsContent>

  <TabsContent value="manual">
    <Steps>
      <Step>Install the following dependencies:</Step>

      ```bash
      npm install clsx tailwind-merge @tsparticles/react @tsparticles/slim
      ```

      <Step>Add the `utils` file to the `@/lib` folder</Step>

      ```tsx showLineNumbers
      import { ClassValue, clsx } from "clsx";
      import { twMerge } from "tailwind-merge";

      export function cn(...inputs: ClassValue[]) {
        return twMerge(clsx(inputs));
      }
      ```

      <Step>Copy and paste the following code into your project.</Step>

      <ComponentSource name="particles" title="components/ui/particles.tsx" />

      <Step>Update the import paths to match your project setup.</Step>
    </Steps>
  </TabsContent>
</CodeTabs>

## Examples

<ComponentPreview name="particles-stars-demo" className="[&_.preview>[data-orientation=vertical]]:sm:max-w-[80%] **:[.preview]:min-h-[400px]" description="Displays a particles component" align="center" />

<ComponentPreview name="particles-snow-demo" className="[&_.preview>[data-orientation=vertical]]:sm:max-w-[80%] **:[.preview]:min-h-[400px]" description="Displays a particles component with snow variant" align="center" />

## Usage

```tsx showLineNumbers
import { Particles } from "@/components/ui/particles";
```

```tsx showLineNumbers
<Particles variant="snow" />
```

## Props

`particles` props.

<TypeTable
  type={{
  className: {
    type: "string",
    description: "Additional CSS classes to apply to the component"
  },
  variant: {
    type: '"default" | "snow" | "stars"',
    description: "The visual style of the particles",
    default: '"default"'
  },
  style: {
    type: "ParticleStyle",
    description: "Custom particle styling options",
    default: "{}"
  },
  interactive: {
    type: "boolean",
    description: "Whether particles should respond to mouse interactions",
    default: "true"
  },
  customOptions: {
    type: "Record",
    description: "Additional configuration options for the particles engine",
    default: "{}"
  }
}}
/>

## Credits

All credits goes to [tsparticles](https://github.com/matteobruni/tsparticles).

# Border Beam
URL: /docs/components/border-beam

Displays an animated border effect with a glowing beam around the content that adapts to the size of the container.

***

title: Border Beam
description: Displays an animated border effect with a glowing beam around the content that adapts to the size of the container.
component: true
---------------

<ComponentPreview name="border-beam-demo" className="[&_.preview>[data-orientation=vertical]]:sm:max-w-[80%] **:[.preview]:min-h-[400px]" description="Displays an animated border effect with a glowing beam" align="center" />

## Installation

<CodeTabs>
  <TabsList>
    <TabsTrigger value="cli">CLI</TabsTrigger>
    <TabsTrigger value="manual">Manual</TabsTrigger>
  </TabsList>

  <TabsContent value="cli">
    ```bash
    npx shadcn@latest add https://badtz-ui.com/r/border-beam.json
    ```
  </TabsContent>

  <TabsContent value="manual">
    <Steps>
      <Step>Install the following dependencies:</Step>

      ```bash
      npm install clsx tailwind-merge motion
      ```

      <Step>Add the `utils` file to the `@/lib` folder</Step>

      ```tsx showLineNumbers
      import { ClassValue, clsx } from "clsx";
      import { twMerge } from "tailwind-merge";

      export function cn(...inputs: ClassValue[]) {
        return twMerge(clsx(inputs));
      }
      ```

      <Step>Copy and paste the following code into your project.</Step>

      <ComponentSource name="border-beam" title="components/ui/border-beam.tsx" />

      <Step>Update the import paths to match your project setup.</Step>
    </Steps>
  </TabsContent>
</CodeTabs>

## Usage

```tsx showLineNumbers
import { BorderBeam } from "@/components/ui/border-beam";
```

```tsx showLineNumbers
<div className="relative rounded-lg shadow-sm">
  <BorderBeam lightColor="#FAFAFA" lightWidth={350} duration={8} />
  <div className="h-full w-full py-4 px-6 max-w-72 space-y-2">
    <h3 className="font-gilroy text-2xl">Border Beam</h3>
    <p className="text-sm">
      This card showcases a dynamic border beam effect, adding a subtle,
      animated glow around the edges.
    </p>
  </div>
</div>
```

## Props

`border-beam` props.

<TypeTable
  type={{
  lightWidth: {
    type: "number",
    description: "Width of the light beam effect in pixels.",
    default: "200"
  },
  duration: {
    type: "number",
    description: "Duration of the animation in seconds.",
    default: "10"
  },
  lightColor: {
    type: "string",
    description: "Color of the light beam effect.",
    default: '"#FAFAFA"'
  },
  borderWidth: {
    type: "number",
    description: "Width of the border in pixels.",
    default: "1"
  },
  className: {
    type: "string",
    description: "Additional custom classes."
  },
  props: {
    type: "Record<string, any>",
    description: "Additional HTML attributes for the component's wrapper div."
  }
}}
/>

## Credits

This component is inspired by [Resend](https://resend.com/home)

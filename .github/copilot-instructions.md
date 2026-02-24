
init mcp servers at first

## MCP Initialization

**CRITICAL:** Call `mcp_next-devtools_init` at the start of every session to set up Next.js DevTools context.

route constants: src/lib/routes.ts
use todo comments by todo extension 
tech stack:
- tailwindcss4
- nextjs16
- react19
- shadcn/ui
- mcp server
- bun runtime

instructions: #file:./instructions


## Next.js DevTools MCP - Key Tools

### 1. nextjs_docs - Documentation Search
- Search official Next.js documentation
- Always use for Next.js-specific questions
- Provides authoritative answers

### 2. nextjs_index - Discover Servers
- Lists all running Next.js dev servers
- Shows available MCP tools per server
- Automatically discovers servers on all ports

### 3. nextjs_call - Execute Runtime Tools
- Get real-time errors and diagnostics
- Query routes, logs, and component info
- Requires nextjs_index first to find servers

### 4. browser_eval - Browser Testing
- Test pages in real browser with Playwright
- Verify functionality and UI
- Capture console errors and warnings

### 5. upgrade_nextjs_16 - Version Upgrade
- Automated upgrade from Next.js 15 to 16
- Runs official codemods automatically
- Handles breaking changes

### 6. enable_cache_components - Cache Components Setup
- Enable Cache Components mode
- Auto-detect and fix errors
- Add necessary Suspense boundaries

## Workflow Guidelines

1. **Start MCP Server:**
   ```bash
   bun dev
   ```

2. **For runtime diagnostics:**
   - Use `nextjs_index` to discover servers
   - Use `nextjs_call` to query specific tools
   - Use `browser_eval` to test in browser

3. **For documentation:**
   - Always use `nextjs_docs` for Next.js questions
   - Read `nextjs-docs://llms-index` to find paths

4. **For implementation:**
   - Follow component/feature/layout instructions
   - Use shadcn/ui components
   - Apply Tailwind CSS 4 styling
   - Export route constants from src/lib/routes.ts

## shadcn/ui MCP - Key Tools

### 1. search_items_in_registries
- Fuzzy search for components by name/description
- Requires registry names (e.g., '@shadcn')

### 2. list_items_in_registries
- List all available components with pagination
- Shows installable components

### 3. view_items_in_registries
- View component details and implementation
- Includes component files and content

### 4. get_item_examples_from_registries
- Find usage examples (e.g., 'button-demo')
- Returns full implementation code

### 5. get_add_command_for_items
- Generate `shadcn add` commands for bulk installs
- Format: `@registry/component-name`

### 6. get_project_registries
- Get configured registry names from components.json

## Workflow Guidelines for shadcn/ui

1. **Search:** `mcp_shadcn_search_items_in_registries`
2. **View Details:** Use `view_items_in_registries`
3. **Check Examples:** Use `get_item_examples_from_registries`
4. **Install:** Generate command with `get_add_command_for_items`, then `bunx shadcn@latest add [components]`
5. **Use:** Follow shadcn conventions, maintain consistency

## Integration with Next.js & Tailwind

- shadcn/ui components work with Next.js 16, Tailwind CSS 4, React 19
- Prefer Server Components

## 🎨 Component Design Workflow - MANDATORY PROCESS

**CRITICAL REQUIREMENT:** Before designing ANY new component, you MUST follow this process:

### Step 1: Example Research (REQUIRED)
1. Search for related components in shadcn/ui using `search_items_in_registries`
2. Get multiple examples using `get_item_examples_from_registries`:
   - Search for base component (e.g., "button-demo", "card-demo")
   - Search for variations (e.g., "button-with-icon", "card-with-header")
   - Search for advanced patterns (e.g., "[component]-advanced", "[component]-complex")
3. View at least 3-5 different examples before design

### Step 2: Pattern Analysis
- Analyze component structure and composition
- Note styling patterns and Tailwind usage
- Identify state management patterns
- Check accessibility features

### Step 3: Design Implementation
- Follow the patterns observed in examples
- Use consistent prop names and structures
- Apply same styling methodology
- Maintain component API consistency

### Step 4: Validation
- Compare with existing project components
- Ensure Tailwind CSS 4 compatibility
- Verify React 19 compatibility
- Test with browser_eval

## Component Design Examples - Search Prompts

When asked to design a component, ALWAYS search for these example patterns:

```
# For ANY component:
1. "[component-name]-demo" → Basic usage
2. "[component-name]-example" → Common patterns
3. "[component-name]-advanced" → Complex scenarios
4. "example-[component-type]" → Real-world usage
5. "[component-name]-with-[feature]" → Feature combinations
```

## Example Component Design Request Flow

**User:** "Create a user profile card component"

**Agent Process:**
1. `search_items_in_registries` → Search for "card" in @shadcn
2. `get_item_examples_from_registries` → "card-demo"
3. `get_item_examples_from_registries` → "card-with-header"
4. `get_item_examples_from_registries` → "card-with-image"
5. `get_item_examples_from_registries` → "example-profile-card" (if exists)
6. Analyze all examples
7. Design component based on patterns
8. Implement with same structure/styling
9. Test with browser_eval

**DO NOT** skip example research - this ensures consistency and best practices!

must fix all errors both dev-time and runtime before finalizing component design.

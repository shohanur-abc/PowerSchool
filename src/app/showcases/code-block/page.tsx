"use client";
import { CodeBlock } from '@/components/molecules/code-block';

export default function CodeBlockPage() {
    return (
        <div className="space-y-16 py-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">With Title</h2>
                <CodeBlock
                    title="button.tsx"
                    code={`import { Button } from '@/components/ui/button';

export function MyButton() {
  return (
    <Button variant="outline" size="sm">
      Click me
    </Button>
  );
}`}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">With Line Numbers</h2>
                <CodeBlock
                    language="typescript"
                    showLineNumbers
                    code={`const fetchStudents = async (classId: string) => {
  const response = await fetch(\`/api/students?classId=\${classId}\`);
  if (!response.ok) throw new Error('Failed to fetch');
  return response.json();
};`}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">Shell Command</h2>
                <CodeBlock
                    language="bash"
                    code={`bun install
bun dev`}
                />
            </div>
            <div>
                <h2 className="text-lg font-semibold mb-4">No Header</h2>
                <CodeBlock
                    code={`{ "name": "school-app", "version": "1.0.0" }`}
                />
            </div>
        </div>
    );
}

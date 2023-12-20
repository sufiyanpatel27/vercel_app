/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/OV6XM6ESI7V
 */
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react";

interface ChildProps {
  changePageRequest: (page: string) => void;
}

const SchemaGeneratorComponent: React.FC<ChildProps> = ({ changePageRequest }) => {
  return (
    <main key="1" className="flex w-full h-screen">
      <aside className="w-1/5 bg-gray-100 dark:bg-gray-800 p-4 flex flex-col">
        <div className="flex items-center mb-4">
          <ArrowLeftIcon className="w-4 h-4 mr-2" />
        </div>
        <div className="space-y-4 mt-8">
          <p onClick={() => changePageRequest("schemagenerator")}>Schema</p>
          <p onClick={() => changePageRequest("controllergenerator")}>Controller</p>
        </div>
      </aside>
      <section className="w-4/5 p-4 relative">
        <h2 className="text-2xl font-bold mb-4">Schema</h2>
        <div className="grid grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Schema 1</CardTitle>
              <CardDescription>Card Description 1</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card content goes here.</p>
            </CardContent>
            <CardFooter>
              <Button>Click Me</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Schema 2</CardTitle>
              <CardDescription>Card Description 2</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card content goes here.</p>
            </CardContent>
            <CardFooter>
              <Button>Click Me</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Add New Schema</CardTitle>
              <CardDescription>Click the button to add a new schema</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Define your new schema here.</p>
            </CardContent>
            <CardFooter>
              <Button>Add Schema</Button>
            </CardFooter>
          </Card>
        </div>
        <Button className="absolute bottom-4 right-4">Next</Button>
      </section>
    </main>
  )
}
export default SchemaGeneratorComponent;


function ArrowLeftIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  )
}
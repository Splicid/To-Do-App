import { useState } from 'react'
import './App.css'
import DataHandler from './components/dataHandler'
import {Input} from './components/ui/input'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardFooter,CardHeader, CardTitle,} from './components/ui/card'


type FormData = {
  job: string | undefined;
  id: number | undefined;
};

const App: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    job: undefined,
    id: undefined,
  });

  const [data, setData] = useState<FormData[]>([]);
  
  const handleChange = (e: React.FormEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      job: { value: string };
    };
    const newFormData = {
      ...formData,
      job: target.job.value,
      id: Math.floor(Math.random() * 64555),
    };
    setFormData(newFormData);
    setData(prevData => [...prevData, newFormData]);
  };

  const removeData = (id: number | undefined) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  }
  
  console.log(data)
  return (
    <>
      <form onSubmit={handleChange}>
        <Card>
          <CardHeader>
            <CardTitle>What Will You Do?</CardTitle>
            <CardDescription>Add some items to do today!</CardDescription>
          </CardHeader>
          <CardContent>
          </CardContent>
          <CardFooter>
          <Input name="job" type='text' placeholder='To do'/>
          <Button type='submit' variant="secondary">Add To List</Button>
          </CardFooter>
        </Card>
      </form>

      {data.map((item) => (
        <ul key={item.id}>
          <li>{item.job} <Button type='submit' variant="secondary" onClick={() => removeData(item.id)}> Delete </Button></li>
        </ul>
      ))}
    </>
  );
}

export default App

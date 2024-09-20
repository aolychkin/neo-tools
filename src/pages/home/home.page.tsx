import { Sidebar } from "../../features/sidebar";
import { Layout } from "./ui/layout";

export function HomePage(){
  return (
    <Layout sidebar={<Sidebar/>}/>
  )
}
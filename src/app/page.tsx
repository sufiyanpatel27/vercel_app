"use client"; 
import Image from 'next/image'
import { SetStateAction, useState } from 'react'
import SchemaGeneratorComponent from '@/components/component/schema-generator-component'
import ControllerGeneratorComponent from '@/components/component/controller-generator-component'

export default function Home() {

  const [page, setPage] = useState("schemagenerator");

  const changePage = (page: string) => {
    setPage(page);
  };

  

  return (
    <div>
    {page === 'schemagenerator' && <SchemaGeneratorComponent changePageRequest = {changePage}/>}
    {page === 'controllergenerator' && <ControllerGeneratorComponent changePageRequest = {changePage}/>}
    </div>
  )
}

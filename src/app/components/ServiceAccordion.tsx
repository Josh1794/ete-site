'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface ServiceProps {
  name: string;
  description: string;
}

export function ServiceAccordion({ name, description }: ServiceProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='bg-white border rounded-lg overflow-hidden'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='w-full p-6 text-left flex items-center justify-between'
      >
        <h3 className='text-xl font-normal'>{name}</h3>
        <ChevronDown
          className={`transform transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <p className='p-6 pt-0 text-muted-foreground font-thin'>
          {description}
        </p>
      </div>
    </div>
  );
}

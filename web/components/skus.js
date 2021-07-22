import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import classNames from 'classnames';

const plans = [
  {
    name: 'Startup',
    ram: '12GB',
    cpus: '6 CPUs',
    disk: '160 GB SSD disk',
  },
  {
    name: 'Business',
    ram: '16GB',
    cpus: '8 CPUs',
    disk: '512 GB SSD disk',
  },
  {
    name: 'Enterprise',
    ram: '32GB',
    cpus: '12 CPUs',
    disk: '1024 GB SSD disk',
  },
]

export default function Skus() {
  const [selected, setSelected] = useState('startup')

  return (
    <RadioGroup value={selected} onChange={setSelected}>
      {/* This Label is for the root `RadioGroup`.  */}
      <RadioGroup.Label className="sr-only">Plan</RadioGroup.Label>

      <div className="bg-white rounded-md">
        <RadioGroup.Option
          value="startup"
          className={({ checked }) => `
            ${checked ? 'bg-indigo-50 border-indigo-200' : 'border-gray-200'}
            relative border p-4 flex
          `}
        >
          {({ checked }) => (
            <div className="flex flex-col">
              {/* This Label is for the `RadioGroup.Option`.  */}
              <RadioGroup.Label
                as="span"
                className={classNames(
                  checked ? 'text-indigo-900' : 'text-gray-900',
                  'block text-sm font-medium'
                )}
              >
                Startup
              </RadioGroup.Label>

              {/* This Description is for the `RadioGroup.Option`.  */}
              <RadioGroup.Description
                as="span"
                className={classNames(
                  checked ? 'text-indigo-700' : 'text-gray-500',
                  'block text-sm'
                )}
              >
                Up to 5 active job postings
              </RadioGroup.Description>
            </div>
          )}
        </RadioGroup.Option>
      </div>
    </RadioGroup>
  )
}
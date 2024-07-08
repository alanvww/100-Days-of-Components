import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const buttons = [
	{
		name: 'Primary Button',
		component: (
			<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
				Primary Button
			</button>
		),
		code: `<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Primary Button
</button>`,
	},
	{
		name: 'Secondary Button',
		component: (
			<button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
				Secondary Button
			</button>
		),
		code: `<button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
  Secondary Button
</button>`,
	},
	{
		name: 'Outline Button',
		component: (
			<button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
				Outline Button
			</button>
		),
		code: `<button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  Outline Button
</button>`,
	},
];

const ButtonShowcase = () => {
	return (
		<div className="p-4">
			{buttons.map((button, index) => (
				<div key={index} className="mb-8">
					<h2 className="text-xl font-semibold mb-2">{button.name}</h2>
					<Tabs defaultValue="preview" className="w-full">
						<TabsList>
							<TabsTrigger value="preview">Preview</TabsTrigger>
							<TabsTrigger value="code">Code</TabsTrigger>
						</TabsList>
						<TabsContent value="preview" className="p-4 border rounded">
							{button.component}
						</TabsContent>
						<TabsContent value="code" className="p-4 border rounded">
							<pre className="bg-gray-100 p-2 rounded overflow-x-auto">
								<code>{button.code}</code>
							</pre>
						</TabsContent>
					</Tabs>
				</div>
			))}
		</div>
	);
};

export default ButtonShowcase;

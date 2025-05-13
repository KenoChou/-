type Model = {
    id: string;
    imageUrl: string;
    title: string;
    author: string;
    views: number;
  };
  
  type Props = {
    model: Model;
  };
  
  export default function ModelCard({ model }: Props) {
    const { imageUrl, title, author, views } = model;
  
    return (
      <div className="border rounded-lg overflow-hidden shadow-md">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-500">by {author}</p>
          <p className="text-sm text-gray-600 mt-2">{views} 浏览</p>
        </div>
      </div>
    );
  }
  
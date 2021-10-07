import Link from 'next/link';

export interface BlogListItemProps {
  title: string;
  description?: string;
  tags: string[];
  thumbnail: string;
  urlName: string;
}

const BlogListItem: React.FC<BlogListItemProps> = ({
  title,
  thumbnail,
  description,
  tags,
  urlName,
}) => {
  return (
    <Link href={'/blog/' + urlName}>
      <div className="p-5 bg-dark-200 w-80 text-light-100 font-roboto rounded-lg shadow-md cursor-pointer hover:bg-dark-300 transition-all duration-100">
        <div className="w-full max-h-44 overflow-y-hidden">
          <img src={thumbnail} alt={title} className="w-full h-auto" />
        </div>
        <div>
          {tags && (
            <div className="flex flex-row gap-1 flex-wrap mt-3">
              {tags.map((tag, i) => (
                <Link
                  href={'/blogs/' + tag.replace(/\s+/g, '-').toLowerCase()}
                  key={i}
                >
                  <div
                    className="text-light-200 px-3 py-1 bg-grey-500 rounded-md w-max hover:bg-grey-450"
                    key={i}
                  >
                    {tag}
                  </div>
                </Link>
              ))}
            </div>
          )}
          <h3 className="text-light-100">{title}</h3>
          {description && <p className="text-light-300">{description}</p>}
        </div>
      </div>
    </Link>
  );
};

export default BlogListItem;

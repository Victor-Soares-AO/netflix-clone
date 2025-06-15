import categories from "@/api/api";
import { Section } from "@/components/Section";

export default function Home() {
    return (
        <div>
            {categories.map((category) => (
                <Section 
                    key={category.name}
                    title={category.title}
                    path={category.path}
                />
            ))}
        </div>
    );
}

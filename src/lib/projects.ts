export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  liveLink?: string;
  repoLink?: string;
  overview: string[];
  gallery: string[];
}

export const projectsData: Project[] = [
  {
    id: 1,
    slug: "ecommerce-redesign",
    title: "E-commerce Redesign",
    description:
      "A modern and responsive e-commerce platform built with Next.js, featuring product Browse, cart management, and secure checkout.",
    imageUrl: "/images/project-ecommerce.jpg",
    technologies: ["Next.js", "React", "Tailwind CSS", "Stripe API"],
    liveLink: "#",
    repoLink: "#",
    overview: [
      "This project started from a simple observation: many online stores have strong products, but the buying experience becomes too noisy before the customer reaches checkout. The redesign focuses on removing that friction by making browsing, product comparison, cart review, and payment feel connected as one calm flow.",
      "The first priority was the product discovery experience. I structured the interface so featured items, categories, product cards, and promotional content can live together without competing for attention. The goal is to help visitors understand what is available quickly, then move deeper only when they are ready.",
      "The visual direction stays close to the portfolio style: warm accents, soft surfaces, generous spacing, and simple typography. That keeps the store modern without making it feel like a generic template. Product imagery becomes the main visual signal, while the UI quietly supports the decision-making process.",
      "On the technical side, the page structure is built around reusable sections. Product cards, checkout summaries, empty states, and payment feedback can be composed in different parts of the app, which makes the storefront easier to maintain as the catalog grows.",
      "Mobile behavior was treated as a core experience rather than a smaller version of desktop. The layout keeps action buttons easy to reach, reduces unnecessary horizontal movement, and makes cart information readable even when space is tight.",
      "The checkout flow was designed to reduce uncertainty. Clear totals, predictable form groups, and visible confirmation states help users feel in control. In an e-commerce product, small moments of clarity often matter as much as the larger visual redesign.",
      "The final result is a storefront concept that feels polished, fast to scan, and ready to extend with real inventory, payment integration, and customer account features.",
    ],
    gallery: ["/images/project-ecommerce.jpg", "/images/workspace-coding.jpg"],
  },
  {
    id: 2,
    slug: "task-management-dashboard",
    title: "Task Management Dashboard",
    description:
      "An interactive dashboard for managing tasks, tracking progress, and collaborating with team members. Features drag-and-drop functionality.",
    imageUrl: "/images/project-blog.jpg",
    technologies: ["React", "TypeScript", "Redux", "Material-UI"],
    liveLink: "#",
    repoLink: "#",
    overview: [
      "This dashboard was designed for teams that need to understand project movement without constantly switching tools. The main experience brings task planning, status tracking, and team collaboration into one focused workspace.",
      "A dashboard can easily become crowded, so the first design decision was to make information hierarchy very clear. Important numbers, urgent tasks, and current progress need to be visible immediately, while supporting details can stay one layer deeper.",
      "The task board uses familiar interaction patterns so users do not need to learn a new mental model. Cards can represent work items, columns can represent status, and small details such as labels, assignees, and due dates help teams scan the board quickly.",
      "The visual style stays practical and quiet. Instead of relying on decorative elements, the layout uses spacing, contrast, and consistent component sizing to make repeated daily use feel comfortable.",
      "From an implementation perspective, the project benefits from a typed component structure. Task cards, progress summaries, filters, and activity modules can evolve independently without making the dashboard harder to reason about.",
      "Collaboration features are treated as part of the workflow, not as a separate add-on. Comments, recent updates, and ownership indicators should help answer the question: what changed, who owns it, and what needs attention next?",
      "The result is a dashboard concept that supports fast review sessions, daily standups, and focused individual work without overwhelming the user with unnecessary visual weight.",
    ],
    gallery: ["/images/project-blog.jpg", "/images/ui-design-portfolio-dian-tanjung.png"],
  },
  {
    id: 3,
    slug: "real-time-chat-application",
    title: "Real-time Chat Application",
    description:
      "A real-time chat application with user authentication, private messaging, and group chats, leveraging WebSockets.",
    imageUrl: "/images/project-chat.jpg",
    technologies: ["React", "Node.js", "Socket.IO", "MongoDB"],
    liveLink: "#",
    repoLink: "#",
    overview: [
      "This real-time chat application explores how to make live communication feel responsive, organized, and trustworthy. The core experience is built around fast message delivery, clear room context, and simple movement between private and group conversations.",
      "The first design challenge was reducing noise. Chat interfaces can become visually busy very quickly, especially when they include online status, timestamps, unread messages, and multiple conversation types. The layout keeps these signals visible but secondary to the message itself.",
      "Authentication is an important part of the experience because messaging is personal. The application flow assumes users should understand when they are signed in, who they are talking to, and whether a conversation is private or shared with a group.",
      "Real-time behavior is handled through event-driven communication, allowing messages and presence updates to appear without requiring a page refresh. That creates the feeling of immediacy users expect from modern chat tools.",
      "The interface separates conversation navigation from the active message thread. This makes the product easier to extend with features like pinned chats, search, reactions, attachments, or notification preferences.",
      "A strong chat experience also needs good empty states and loading states. When there are no messages, when a user joins a new room, or when a network event is delayed, the UI should still explain what is happening without feeling broken.",
      "The final concept is a messaging product foundation that can grow into a team chat, community room, or customer support experience while keeping the underlying interaction model clear.",
    ],
    gallery: ["/images/project-chat.jpg", "/images/workspace-coding.jpg"],
  },
];

export function getProjectBySlug(slug: string) {
  return projectsData.find((project) => project.slug === slug);
}

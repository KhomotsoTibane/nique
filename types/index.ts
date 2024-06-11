export interface NavbarLink {
  imgURL: string;
  route: string;
  label: string;
}

export interface MenuItem {
  name: string;
  image: string;
  description: string;
  isVegan: boolean;
  price: number;
  mealOfTheDay?:boolean;
  adjustedPrice?:number;
}

export interface ClassEvent {
  id: number;
  category: string;
  title: string;
  slug:string;
  date: string;
  image: string;
  details: {
    description: string;
    price: string;
    time: string;
    teacher: {
      name: string;
      description: string;
      language: string;
      img:string;
    };
  };
}

export interface URLProps {
  params: { id: string };
}


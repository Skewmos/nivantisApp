interface Drug {
    id: number;
    title: string;
  }
export const load =  (data: Array<Drug>) => {
  return data;
};

export const search = (data: Array<Drug>, search: string) => {

    const regex = new RegExp(`^.*?${search}.*?$`, 'i');

    const result = data.filter((d) => {
       return regex.test(d.title);
    });
return result;
} 
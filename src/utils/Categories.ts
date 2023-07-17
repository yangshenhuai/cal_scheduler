export const categoryClasses = ['gray','indigo','green','blue','red','purple'];
const categoryColrs = ['#9CA3AF','#60A5FA','#10B981','#3B82F6','#EF4444','#8B5CF6'];
export const getCategoryClassColr = (categoryName: string) => { 
    const labels = new Map<string,string>()
    categoryClasses.forEach((item,index) => {  
        labels.set(item,categoryColrs[index]);
    })
    return labels.get(categoryName);
}
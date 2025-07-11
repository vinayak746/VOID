export const dateFormat = (date) => {
    return new Date(date).toLocaleDateString('en-IN', {
        weekday: 'short',
        year: 'numeric',
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    })
  
  

};

public class Cat 
{
    private string name;
    private integer size;
    public Cat(string n,integer s)
    {
        name=n;
        size=s;
    }
    public Cat()
    {
        name='tina';
        size=10;
    }
    
    public void display()
    {
        system.debug('name of my cat '+name);
         system.debug('size of my cat '+size);

    }

}
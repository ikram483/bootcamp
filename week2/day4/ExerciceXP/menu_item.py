import psycopg2
class MenuItem:
    def __init__(self, name, price):
        self.name =name
        self.price =price
        
    def save(self):
        """Save the menu item to the database."""
        connection= psycopg2.connect(
            dbname="DAY4",
            user="postgres",
            password="M53073607",
            host="localhost"
        )
        cursor=connection.cursor()
        #creation de query
        query= "INSERT INTO Menu_Items (item_name, item_price) VALUES (%s, %s)"
        #executer query
        cursor.execute(query, (self.name,self.price))
        
        connection.commit()
        cursor.close()
        connection.close()
        
        print(f" '{self.name}' added successfully!")
    def delete(self):
        """ Delete the item from the Menu_Items table """
        connection = psycopg2.connect(
            dbname="DAY4",
            user="postgres",
            password="M53073607",
            host="localhost"
        )
        cursor=connection.cursor()
        
        
        query="DELETE FROM Menu_items WHERE name= %s"
        cursor.execute(query,(self.name,))
        
        connection.commit()
        cursor.close()
        connection.close()

        print(f" '{self.name}' deleted successfully!")
    
    def update(self,new_name=None, new_price=None):
        """ Update the item fromm the Menu_Items table """
        connection =psycopg2.connect(
          dbname="DAY4",
          user="postgres",
          password="M53073607",
          host="localhost"
        )
        cursor=connection.cursor()
        
        if new_name and new_price:
            query ="UPDATE Menu_Items SET item_name= %s, item_price= %s WHERE item_name =%s"
            cursor.execute(query, (new_name, new_price, self.name))
            self.name =new_name
            self.price=new_price
        elif new_name:
            query="UPDATE Menu_Items SET item_name=%s, WHERE item_name =%s"
            cursor.execute(query, (new_name,self.name))
            self.name=new_name
        
        elif new_price:
            query="UPDATE Menu_Items SET item_price=%s, WHERE item_price =%s"
            cursor.execute(query, (new_price, self.price))
            self.price= new_price
            
        
        connection.commit()
        cursor.close()
        connection.close()
        
        print(f" '{self.name}' updated successfully!")
        
  

# #creation d'un menu 
# tacos= MenuItem("tacos",50)
# pizza =MenuItem("pizza",100)

# #save
# tacos.save()
# pizza.save()

# print("items added successfully!")
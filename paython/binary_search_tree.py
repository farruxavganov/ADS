class Node:
    def __init__(self, key):
        self.value = key
        self.left = None
        self.right = None

## recursive      
class BSTR:
    def __init__(self):
        self.root = None
        
    def search(self,key):
        return self._search_helper(self.root, key)
        
    def _search_helper(self, root, key):
        if root is None or root.value == key:
            return root
        
        if key < root.value:
            return self._search_helper(root.left, key)
        elif key > root.value:
            return self._search_helper(root.right, key)
            
    def insert(self, key):
        self.root = self._isert_helper(self.root, key)
        
    def _isert_helper(self, root, key):
        if root is None:
            return Node(key)
            
        if key < root.value:
            root.left = self._isert_helper(root.left, key)
        elif key > root.value:
            root.right = self._isert_helper(root.right, key)
            
        return root
    
    def display(self):
        self._display_helper(self.root)
        
    def _display_helper(self, root):
        if root is None:
            return;
        self._display_helper(root.left)
        print(root.value, "\n")
        self._display_helper(root.right)
        
    def delete(self, key):
        self.root = self._delete_helper(self.root, key)
        
    def _delete_helper(self, root, key):
        if root is None:
            return root
        if key < root.value:
            root.left = self._delete_helper(root.left, key)
        elif key > root.value:
            root.right = self._delete_helper(root.right, key)
        else:
            if root.left is None and root.right is None:
                return None
            if root.left is None:
                return root.right
            if root.right is None:
                return root.left
                
            root.value = self._get_min(root.right)
            root.right = self._delete_helper(root.right, root.value)
            
        return root
        
    def _get_min(self, root):
        current = root
        while current.left:
            current = current.left
            
        return current.value
                
                
             
        
        
#tree = BSTR()
#tree.insert(0)
#tree.insert(5)
#tree.insert(10)
#tree.insert(44)
#tree.delete(5)
#tree.delete(0)
#tree.insert(8)
#tree.insert(0)
#tree.display()

## none recursive
class BST:
    def __init__(self):
        self.root = None
        
    def search(self, key):
        current = self.root
        
        while current is not None:
            if current.value == key:
                return current
            if key < current.value:
                current = current.left
            elif key > current.value:
                current = current.right
                
    def insert(self, key):
        new_node = Node(key)
        
        if self.root is None:
            self.root = new_node
            return
            
        current = self.root
        
        while True:
            if key < current.value:
                if current.left is None:
                    current.left = new_node
                    break
                current = current.left
            else:
                if current.right is None:
                    current.right = new_node
                    break
                current = current.right
    
    def display(self):
        stack = []
        
        current = self.root
        while True:
            while current is not None:
                stack.append(current)
                current = current.left
        
            if len(stack) == 0:
                break
            current = stack.pop()
            print(current.value, end=" ")
            current = current.right
        print("")
        
    def delete(self, key):
        parrent = None
        current = self.root
        
        while current is not None and current.value != key:
            parrent = current
            if key < current.value:
                current = current.left
            elif key > current.value:
                current = current.right
        
        if current is None:
            return

        if current.left is None:
            if parrent is None:
                self.root = current.right
            elif current == parrent.left:
                parrent.left = current.right
            else: 
                parrent.right = current.right
        elif current.right is None:
            if parrent is None:
                self.root = current.left
            elif current == parrent.right:
                parrent.right = current.left
            else:
                parrent.left = current.right
                
        else:
            parrent_sucsessor = current
            sucsessor = current.right
            
            while sucsessor.left is not None:
                parrent_sucsessor = sucsessor
                sucsessor = current.left
                
            if parrent_sucsessor != current:
                parrent_sucsessor.left = sucsessor.right # or None
                sucsessor.right = current.right
                
            if parrent is None:
                self.root = sucsessor
            elif current == parrent.left:
                parrent.left = sucsessor
            else:
                parrent.right = sucsessor
                
            sucsessor.left = current.left
   
                
tree1 = BST()
tree1.insert(8)
tree1.insert(0)
tree1.insert(4)
tree1.insert(11)
tree1.delete(8)
tree1.insert(5)
tree1.insert(55)
tree1.delete(0)
tree1.display()

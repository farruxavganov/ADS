class Node:
    def __init__(self, key):
        self.value = key
        self.left = None
        self.right = None
        
class BST:
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
                
                
             
        
        
tree = BST()
tree.insert(0)
tree.insert(5)
tree.insert(10)
tree.insert(44)
tree.delete(5)
tree.delete(0)
tree.insert(8)
tree.insert(0)
tree.display()

# include <stdio.h>
# include <stdlib.h>

int main (void) {
  
  char *string = ["Y", "e", "s", "\n"];

  printf("Welcome to Calculator.\n");
  printf("Do you wish to use the calculator to calculate the opportunity cost?\n");
  scanf("%s\n", string); // yes or no input
  
  return 0;
}

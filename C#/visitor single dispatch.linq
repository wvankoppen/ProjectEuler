<Query Kind="Program" />

  interface IExpressionVisitor
  {
    void Visit(Literal literal);
    void Visit(Addition literal);
  }

  interface IExpression
  {
    void Accept(IExpressionVisitor visitor);
  }

  class Literal : IExpression
  {
    internal double Value { get; set; }

    public Literal(double value)
    {
      this.Value = value;
    }
    public void Accept(IExpressionVisitor visitor)
    {
      visitor.Visit(this);
    }
  }

  class Addition : IExpression
  {
    internal IExpression Left { get; set; }
    internal IExpression Right { get; set; }

    public Addition(IExpression left, IExpression right)
    {
      this.Left = left;
      this.Right = right;
    }

    public void Accept(IExpressionVisitor visitor)
    {
      visitor.Visit(this);
    }
  }

  class ExpressionPrinter : IExpressionVisitor
  {
    StringBuilder sb;

    public ExpressionPrinter(StringBuilder sb)
    {
        this.sb = sb;
    }

    public void Visit(Literal literal)
    {
      sb.Append(literal.Value);
    }

    public void Visit(Addition addition)
    {
      sb.Append("(");
      addition.Left.Accept(this);
      sb.Append("+");
      addition.Right.Accept(this);
      sb.Append(")");
    }
  }

  class Program
  {
    static void Main(string[] args)
    {
      // emulate 1+2+3
      var e = new Addition(
        new Addition(
          new Literal(1),
          new Literal(2)
        ), 
        new Literal(3)
      );
      var sb = new StringBuilder();
      var expressionPrinter = new ExpressionPrinter(sb);
      e.Accept(expressionPrinter);
      sb.ToString().Dump();
	  "end".Dump();
    }
  }

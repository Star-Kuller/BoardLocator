using Grpc.Core;

namespace BoardLocator.Api.Services;

public class AuthService(ILogger<AuthService> logger) : Auth.AuthBase
{
    public override async Task<TokenResponse> login(LoginRequest request, ServerCallContext context)
    {
        logger.LogInformation("Login method called");
        return new TokenResponse();
    }

    public override async Task<TokenResponse> register(RegisterRequest request, ServerCallContext context)
    {
        logger.LogInformation("Register method called");
        return new TokenResponse();
    }
}